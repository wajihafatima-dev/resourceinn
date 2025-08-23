import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const { password: _, ...userData } = user.toObject();

    const response = NextResponse.json(
      {
        message: 'Login successful',
        user: userData,
      },
      { status: 200 }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      maxAge: 60 * 60, 
      path: '/',
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
