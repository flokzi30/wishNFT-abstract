'use client'

import { AbstractWalletProvider } from "@abstract-foundation/agw-react"
import { abstract } from "viem/chains"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
    return (
        <AbstractWalletProvider chain={abstract}>
                {children}
        </AbstractWalletProvider>
    )
}