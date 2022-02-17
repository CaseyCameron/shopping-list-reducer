import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('that all expected items render on page', () => {
  render(<App />);

  // check for heading
  screen.getByRole('heading', { name: /Welcome to the Shopping List/i });

  // check for user input box
  screen.getByRole('textbox');
  screen.getByPlaceholderText(/New Item/i);

  // check for Add Item button
  screen.getByRole('button', { name: /add item/i });

  // check for initial state entry and buttons
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);

  // check for checkbox within the 'meat' div
  const meatItems = screen.getByText(/meat/i);
  within(meatItems).getByRole('checkbox');

  // // check for edit button with the 'meat' div
  within(meatItems).getByRole('button', { name: /edit/i });

  // // check for delete button within the 'meat' view
  within(meatItems).getByRole('button', { name: /delete/i });
});

test('for user behavior validation', async () => {
  render(<App />);

  // check that user input 'tofu' renders in the userInput
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'tofu');
  screen.getByDisplayValue(/tofu/i);

  // check that add button creates a new entry
  const addButton = screen.getByRole('button', { name: /add item/i });
  userEvent.click(addButton);
  screen.getByText(/tofu/i);

  // check that the new tofu entry comes with checkbox, edit, and delete button
  const tofuItems = screen.getByText(/tofu/i);
  within(tofuItems).getByRole('checkbox');
  const tofuEdit = within(tofuItems).getByRole('button', { name: /edit/i });
  const tofuDelete = within(tofuItems).getByRole('button', { name: /delete/i });

  // edit the new tofu entry to soy sauce
  userEvent.click(tofuEdit);
  const tofuInput = within(tofuItems).getByRole('textbox');
  expect(tofuInput).toHaveDisplayValue(/tofu/i);

  userEvent.type(tofuInput, 'soy sauce');
  const save = within(tofuItems).getByRole('button', { name: /save/i });
  userEvent.click(save);
  screen.getByText(/soy sauce/i);

  // delete the soy sauce entry
  userEvent.click(tofuDelete);
  expect(tofuItems).not.toBeInTheDocument();
});
