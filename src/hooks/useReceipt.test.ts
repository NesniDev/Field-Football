import { describe, expect, test } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useReceipt } from './useReceipt';

describe('useReceipt', () => {
    test('should return the correct values', () => {
      const {result} = renderHook(() => useReceipt())
      expect(result.current.fieldName).toBe('Ninguna cancha seleccionada')
      expect(result.current.fieldAddress).toBe('Dirección no disponible')
      expect(result.current.formattedDate).toBe('Fecha no seleccionada')
      expect(result.current.startTime).toBeNull()
      expect(result.current.price).toBeNull()
    })
})