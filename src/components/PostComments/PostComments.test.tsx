import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve permitir comentar duas vezes', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Olá, meu nome é João',
            },
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));
        expect(screen.getByText('Olá, meu nome é João')).toBeInTheDocument();
        
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Muito prazer',
            },
        });
        fireEvent.click(screen.getByTestId('btn-comentar'));
        expect(screen.getByText('Muito prazer')).toBeInTheDocument();

        expect(screen.getByText('Olá, meu nome é João')).toBeInTheDocument();
        expect(screen.getByText('Muito prazer')).toBeInTheDocument();
    });
});