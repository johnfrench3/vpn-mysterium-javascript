/**
 * Copyright (c) 2020 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface ConnectionIp {
  ip?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseConnectionIp(data: any): ConnectionIp {
  return data
}
