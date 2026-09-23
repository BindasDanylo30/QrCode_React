import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { QrCodeGen } from './QrCodeGen';
import { GENERATE_DATA } from '../../constants';

describe('QrCodeGen', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('shows validation error when input is empty', () => {
        render(<QrCodeGen />);

        fireEvent.click(screen.getByRole('button', { name: /generate/i }));

        expect(
            screen.getByText(/Please enter text to generate a QrCode/i)
        ).toBeInTheDocument();
        expect(localStorage.getItem(GENERATE_DATA)).toBeNull();
    });

    it('saves a value and renders QR code after generation', () => {
        render(<QrCodeGen />);

        const input = screen.getByPlaceholderText(/Enter your text.../i);
        fireEvent.change(input, { target: { value: 'hello-qrcode' } });
        fireEvent.click(screen.getByRole('button', { name: /generate/i }));

        expect(localStorage.getItem(GENERATE_DATA)).toBe(JSON.stringify(['hello-qrcode']));
        expect(screen.getByRole('img')).toBeInTheDocument();
        expect(input).toHaveValue('');
    });
});
