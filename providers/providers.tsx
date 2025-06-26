'use client'

import { AbstractWalletProvider } from "@abstract-foundation/agw-react"
import { abstract } from "viem/chains"
import { ReactNode } from "react"
import { SolanaWalletProvider } from "./SolanaWalletProvider"
import { NetworkProvider } from "./NetworkProvider"

export function Providers({ children }: { children: ReactNode }) {
    return (
        <AbstractWalletProvider chain={abstract}>
            <SolanaWalletProvider>
                <NetworkProvider>
                    {children}
                </NetworkProvider>
            </SolanaWalletProvider>
        </AbstractWalletProvider>
    )
}