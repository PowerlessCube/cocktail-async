import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CocktailSearchProvider } from '../shared/CocktailSearchProvider';
import Search from './Search';

test('Search input is cleared after form submit', () => {
  render(
    <CocktailSearchProvider>
      <Search />
    </CocktailSearchProvider>
  );
  const inputEle = screen.getByRole('textbox');
  const buttonEle = screen.getByText(/🔍/i);
  userEvent.type(inputEle, 'test');
  expect(inputEle).toHaveDisplayValue('test');
  userEvent.click(buttonEle);
  expect(inputEle).toHaveDisplayValue('');
});
