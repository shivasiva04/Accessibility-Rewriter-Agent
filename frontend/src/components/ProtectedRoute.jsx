// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ user, requiredRole, children }) {
  if (!user) return <Navigate to="/signin" replace />;
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/" replace />;
  return children;
}
