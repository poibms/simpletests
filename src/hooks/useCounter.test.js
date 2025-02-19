import {act, renderHook} from "@testing-library/react";
import {useCounter} from './useCounter.js'
import {describe, expect, it} from "vitest";
import '@testing-library/jest-dom/vitest'

describe("useCounter", () => {
  it('initial Value is 5', async () => {
    const {result} = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  it('increment', async () => {
    const {result} = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(2)

  })
  it('decrement', async () => {
    const {result} = renderHook(() => useCounter(10))
    expect(result.current.count).toBe(10)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(9)
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(8)

  })
})