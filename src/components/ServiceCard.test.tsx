import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';
import { BrowserRouter } from 'react-router-dom';
import { Heart } from 'lucide-react';

// Mock react-i18next
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('ServiceCard', () => {
    const mockProps = {
        title: "Health Insurance",
        icon: Heart,
        href: "/services/health-insurance",
    };

    it('renders service title', () => {
        render(
            <BrowserRouter>
                <ServiceCard {...mockProps} />
            </BrowserRouter>
        );

        expect(screen.getByText("Health Insurance")).toBeInTheDocument();
    });

    it('renders link with correct href', () => {
        render(
            <BrowserRouter>
                <ServiceCard {...mockProps} />
            </BrowserRouter>
        );

        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', '/services/health-insurance');
    });
});
