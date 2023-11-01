
# arc200_decimals()uint64 -> arc200_decimals()uint8

s/ZDbc4A==/hOwT1Q==/ 

/^_reacha_arc200_decimals:$/{
n
n
n
n
n
n
n
n
n
n
i\
extract 7 0 // mod: uint8
}

#load 17 // v1668
#itob
#extract 7 0 // mod: uint8
#store 4 // GV_apiRet :: Null
#b apiReturn_check

# arc200_approve(address,uint256)byte -> arc200_approve(address,uint256)bool

s/HFN4rQ==/tUIhJQ==/

# arc200_transfer(address,uint256)byte -> arc200_transfer(address,uint256)bool

s/82tNvw==/2nAluQ==/

# arc200_transferFrom(address,address,uint256)byte -> arc200_transferFrom(address,address,uint256)bool

s/0KHMFQ==/SpaPjw==/

# convert reach bool true (1) to algosdk.abi.bool (128)

/up to 9 bytes/{
n
n
i\
pushint 7 // mod: push the number 7 onto the stack\
shl // mod: shift the value at the top of the stack 7 bits to the left
}

#log // up to 9 bytes
#load 11 // v1922
#pushint 7 // mod: push the number 7 onto the stack
#shl // mod: shift the value at the top of the stack 7 bits to the left
#itob
#substring 7 8

## mbr req allow overspend

/gtxns Amount/{
n
s/.*/<=/
}

#gtxns Amount
#<=
#assert
#retsub
