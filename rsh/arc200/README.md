# ARC200

ERC20 like token on AVM (Algorand + Voi)

## Have a question?

Let's talk. 

## Changlog

**TBA**

v1.x.y

- *Fix: disallow transfer to self in transfer_ frunction to prevent potential issues associate with modifying same map location in single app call*
- *Add: generate contract.json file in test script, index.mjs*
- *Add: manager readonly method*
- *Improvement: complete test script*
- *Add: contract factory method for each version*

**31 Oct 2023**  

v1.0.0

- Full compliance with [Core Token Specification](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0200.md#core-token-specification)  
- Allow overspend on mbr increase payment
- Add nonstandard methods
  - grant method to update manager
  - touch method to recover untracked funds

## Additional Information

- [ARC-200: Algorand Smart Contract Token Specification](https://arc.algorand.foundation/ARCs/arc-0200)
