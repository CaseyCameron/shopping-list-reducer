import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('for items rendering to page', () => {
  render(<App />);
  // check the header
  expect(screen.getByText(/Welcome to the Shopping List/i)).toBeInTheDocument();

  // check the user input box
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/New Item/i)).toBeInTheDocument();

  // check for Add Item button
  const addButton = screen.getByRole('button', { name: /add item/i });
  expect(addButton).toBeInTheDocument();

  // check for initial state entry and buttons
  const meatItems = screen.getByText(/meat/i);
  expect(meatItems).toBeInTheDocument();

  // check for checkbox within the 'meat' div
  const meatCheckbox = within(meatItems).getByRole('checkbox');
  expect(meatCheckbox).toBeInTheDocument();

  // check for edit button with the 'meat' div
  const editButton = within(meatItems).getByRole('button', { name: /edit/i });
  expect(editButton).toBeInTheDocument();

  // check for delete button within the 'meat' view
  const deleteButton = within(meatItems).getByRole('button', { name: /delete/i });
  expect(deleteButton).toBeInTheDocument();
});

test('for user behavior validation', async () => {
  render(<App />);

  const input = screen.getByRole('textbox');

  // check that user input renders in the userInput
  userEvent.type(input, 'tofu');
  expect(screen.getByDisplayValue(/tofu/i)).toBeInTheDocument();

  // check that add button creates a new entry
  const addButton = screen.getByRole('button', { name: /add item/i });
  userEvent.click(addButton);
  const addInput = screen.getByText(/tofu/i);
  expect(addInput).toBeInTheDocument();

  // check that the new tofu entry comes with checkbox, edit, and delete button
  const tofuItems = screen.getByText(/tofu/i);
  expect(tofuItems).toBeInTheDocument();
  const tofuCheckbox = within(tofuItems).getByRole('checkbox');
  expect(tofuCheckbox).toBeInTheDocument();
  const tofuEdit = within(tofuItems).getByRole('button', { name: /edit/i });
  expect(tofuEdit).toBeInTheDocument();
  const tofuDelete = within(tofuItems).getByRole('button', { name: /delete/i });
  expect(tofuDelete).toBeInTheDocument();

  // edit the new tofu entry to soy sauce
  userEvent.click(tofuEdit);
  const tofuInput = within(tofuItems).getByRole('textbox');
  expect(tofuInput).toHaveDisplayValue(/tofu/i);
  userEvent.type(tofuInput, 'soy sauce');
  const save = within(tofuItems).getByRole('button', { name: /save/i });
  expect(save).toBeInTheDocument();
  userEvent.click(save);
  const soySauce = screen.getByText(/soy sauce/i);
  expect(soySauce).toBeInTheDocument();
});
