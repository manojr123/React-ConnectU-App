import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ToastProvider } from 'react-toast-notifications';
import { AuthProvider } from './providers/AuthProvider';
import { PostsProvider } from './providers/PostsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("in index.js");
root.render(
  <React.StrictMode>
   <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
    <AuthProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </AuthProvider>
   </ToastProvider>
  </React.StrictMode>
);

