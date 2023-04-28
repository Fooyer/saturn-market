"use client"

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'

export default function ToastComponent() {
  return (<ToastContainer autoClose={3000} hideProgressBar={true} theme="colored" />)
}