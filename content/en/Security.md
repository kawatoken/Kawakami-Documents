---
title: Security
description: ''
position: 8
category: Whitepaper
fullscreen: true
---

Trust is mission critical to the long-term success of Kawakami. The foundations of trust we have established include token contract safety mechanisms, contract audits, KYC and doxxing, multi-signature team wallets (contract ownership and marketing) and locked liquidity.

## Multisignature safe wallets

We use Gnosis multisignature app to create team-controlled multisig safes:
- Contract owner address: 0x93837577c98E01CFde883c23F64a0f608A70B90F
Requires ⅗ signatures to execute any transaction.
- Marketing address: 0xd0B84202BD02EB1b9f62b30De1D8985F65D8dFB3
Requires ⅗ signatures to execute any transaction.

Multisig requirements: 3 signers minimum, all doxxed. These are the signer addresses used by team members:

- Andrej Kovacevic: 0x0Cd34e606f1e490353aCDFadfFd855d7358CF6B5
- Richard Kayode: 0x139eb2F8Abdd1c2809fc64cef3214943bb0d7e70
- Fahad Abdulrahman: 0x3dbdBb2bDeAF4D8756e2375Bb7Aa841A069283ee
- William Reynolds: 0x9bfb0E684dEDDC637648A642EF5eFE26832c48ba
- Michael Synan: 0xb11ec03332082ddfcbef1f87e464a1f28a342b41

## Token contract security

Contract security has been improved compared to the previous iterations by implementing a timelock on any important contract functions that can potentially be abused. The functions that have been timelocked include:

- changeMarketingWallet()
- emergencyPause()
- transferOwnership()

This means that even if a malicious actor managed to get access to a contract owner address and try to execute a change, the timelock would delay it for 48 hours so that the team has enough time to act and prevent this.

## Contract audit(s) 

The token contract has been audited by CertiK and enrolled in the Skynet monitoring service. There are no critical issues detected by the CertiK engineers, with all the major issues addressed by the time the audit was completed. You can find the full contract audit report here.

## Doxxed Team

The core team members who have access to the multisig team wallets are listed on our official website:  

- Michael Synan - Project Manager
- Andrej Kovacevic - Founder
- Fahad Abdulrahman - Arab Community Manager
- William Reynolds - Marketing Director
- Richard Kayode - Business Development and Communication

The full team section with photos, short bios and social media links can be found on our website [here](https://kawakami.io).

## Kawakami LLC incorporation and trademark 

Kawakami was granted LLC status on March 1st, 2022, in the crypto-friendly state of Wyoming, USA. Additionally, Kawakami has been registered as a trade name in Dubai, UAE and has the ability to open businesses and display advertisements. These steps have been taken to ensure that Kawakami can grow and develop business opportunities within the more traditional financial sector.

# Token Liquidity Lock

100% of the token liquidity was locked for 30 days on launch, as we wanted to wait for the CertiK preliminary report to be done to be sure the contract is 100% safe and functional. Once that was confirmed we locked 100% of the liquidity for 100 years, making it essentially locked forever. The liquidity lock can be checked at any time by following the Unicrypt link [here](https://app.unicrypt.network/amm/uni-v2/pair/0x71ab4e3a48d74a66e1cd4dc5ae74836b713d7378).

