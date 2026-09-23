import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { GenerateHistory } from './GenerateHistory';
import { GENERATE_DATA } from '../../constants';

describe('GenerateHistory', () => {
    beforeEach(() => {
        localStorage.clear();
        localStorage.setItem(GENERATE_DATA, JSON.stringify(['first-code', 'second-code']));
    });

    it('renders all saved QR values from localStorage', () => {
        render(<GenerateHistory />);

        expect(screen.getByText('first-code')).toBeInTheDocument();
        expect(screen.getByText('second-code')).toBeInTheDocument();
        expect(document.querySelectorAll('svg')).toHaveLength(2);
    });
});
