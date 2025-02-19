import React from 'react'
import {render, screen, waitFor} from "@testing-library/react";
import UserProfile from './UserProfile.jsx'
import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";
import '@testing-library/jest-dom/vitest'

describe("UserProfile", () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })
  afterEach(() => {
      vi.resetAllMocks()
  }),

    it('fetches and displays the user data', async () => {
      global.fetch.mockResolvedValueOnce({
        json: async() => ({id: 4, name: 'John', email: 'john@gmail.com'})
      })
      render(<UserProfile userId={4}/>);

      expect(screen.getByText(/loading/i)).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByRole('heading', {name: /John/i})).toBeInTheDocument();
        expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
      })
    })
})