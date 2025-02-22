import { findOne, create } from '../models/User.js';
import { hashSync, compareSync } from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/auth/signup
export async function signup(req, res) {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await create({
      name,
      email,
      password: hashSync(password, 10),
      role,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}

// @desc    Login user
// @route   POST /api/auth/login
export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findOne({ email });
    if (user && compareSync(password, user.password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}