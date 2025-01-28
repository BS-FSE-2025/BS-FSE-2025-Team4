/**
 * @jest-environment jsdom
 */

import fs from 'fs';
import path from 'path';

describe('Login Coach Tests', () => {
  let document;

  beforeEach(() => {
    // טוען את הקובץ HTML לתוך JSDOM
    const html = `
      <form id="loginForm">
        <input id="username" type="text" />
        <input id="password" type="password" />
        <button type="submit">Login</button>
      </form>
      <p id="error-message"></p>
    `;
    document = new DOMParser().parseFromString(html, 'text/html');
    global.document = document;

    // Mocking window.location.href
    delete global.window.location;
    global.window.location = { href: '' };

    // טוען את הקובץ logcoach.js
    require('./logcoach.js');
  });

  test('successful login redirects to welcome.html', () => {
    // Set valid credentials
    document.getElementById('username').value = 'coach';
    document.getElementById('password').value = 'password123';

    // Simulate form submission
    const form = document.getElementById('loginForm');
    form.dispatchEvent(new Event('submit', { bubbles: true }));

    // Check for redirection
    expect(global.window.location.href).toBe('welcome.html');
  });

  test('failed login displays error message', () => {
    // Set invalid credentials
    document.getElementById('username').value = 'wrongUser';
    document.getElementById('password').value = 'wrongPass';

    // Simulate form submission
    const form = document.getElementById('loginForm');
    form.dispatchEvent(new Event('submit', { bubbles: true }));

    // Check error message content
    const errorMessage = document.getElementById('error-message').textContent;
    expect(errorMessage).toBe('Invalid username or password!');
  });

  test('clears previous error message on resubmission', () => {
    // Set an initial error message
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = 'Invalid username or password!';

    // Set valid credentials
    document.getElementById('username').value = 'coach';
    document.getElementById('password').value = 'password123';

    // Simulate form submission
    const form = document.getElementById('loginForm');
    form.dispatchEvent(new Event('submit', { bubbles: true }));

    // Check that the error message is cleared
    expect(errorMessageElement.textContent).toBe('');
  });
});
