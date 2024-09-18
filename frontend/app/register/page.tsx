"use client"; // Ensure this component runs on the client-side

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone_number: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); // Handle error messages
    const router = useRouter();

    // Handle form input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Clear previous errors
        setErrorMessage('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                const user = data.user[0];

                // Save user info in localStorage
                localStorage.setItem('username', user.username);
                localStorage.setItem('userId', user.id);

                // Redirect to dashboard
                router.push('/dashboard');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? "Hide" : "Show"} Password
                    </button>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
