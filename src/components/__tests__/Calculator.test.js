import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Calculator from '../Calculator';

describe('Testing Calculator component with snapshot', () => {
  test('testing Calculator component snapshot', () => {
    const calculator = renderer.create(<Calculator />).toJSON();

    expect(calculator).toMatchSnapshot();
  });

  test('Testing to see if the Calculator component can accurately add two or more numbers together.', () => {
    render(<Calculator />);

    const btn1 = screen.getByRole('button', { name: '1' });
    userEvent.click(btn1);
    const btnPlus = screen.getByRole('button', { name: '+' });
    userEvent.click(btnPlus);
    const btn2 = screen.getByRole('button', { name: '2' });
    userEvent.click(btn2);
    const btnEqual = screen.getByRole('button', { name: '=', exact: false });
    userEvent.click(btnEqual);

    const result = screen.getByTestId('total_value');

    expect(result.textContent).toBe('3');
  });

  test('Testing to see if the Calculator component can accurately subtract two or more numbers from each other.', () => {
    render(<Calculator />);

    const btn1 = screen.getByRole('button', { name: '1' });
    userEvent.click(btn1);
    userEvent.click(btn1);
    const operation = screen.getByRole('button', { name: '-' });
    userEvent.click(operation);
    const btn2 = screen.getByRole('button', { name: '6' });
    userEvent.click(btn2);
    const btnEqual = screen.getByRole('button', { name: '=', exact: false });
    userEvent.click(btnEqual);

    const result = screen.getByTestId('total_value');

    expect(result.textContent).toBe('5');
  });

  test('Testing to see if the Calculator component can accurately multiply two or more numbers together.', () => {
    render(<Calculator />);

    const btn1 = screen.getByRole('button', { name: '1' });
    userEvent.click(btn1);
    userEvent.click(btn1);
    const operation = screen.getByRole('button', { name: /x/i });
    userEvent.click(operation);
    const btn2 = screen.getByRole('button', { name: '2' });
    userEvent.click(btn2);
    const btnEqual = screen.getByRole('button', { name: '=', exact: false });
    userEvent.click(btnEqual);

    const result = screen.getByTestId('total_value');

    expect(result.textContent).toBe('22');
  });

  test('Testing to see if the calculator component can accurately divide two or more numbers from each other.', () => {
    render(<Calculator />);

    const btn1 = screen.getByRole('button', { name: '9' });
    userEvent.click(btn1);
    userEvent.click(btn1);
    const operation = screen.getByRole('button', { name: /÷/i });
    userEvent.click(operation);
    const btn2 = screen.getByRole('button', { name: '3' });
    userEvent.click(btn2);
    const btnEqual = screen.getByRole('button', { name: '=', exact: false });
    userEvent.click(btnEqual);

    const result = screen.getByTestId('total_value');

    expect(result.textContent).toBe('33');
  });
});
