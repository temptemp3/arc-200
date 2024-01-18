export const arc72Schema = {
  name: "ARC-72",
  description: "Smart Contract NFT Interface",
  methods: [
    {
      name: "_reachp_0",
      args: [{ type: "uint64" }, { type: "(byte[67],address)" }],
      returns: { type: "void" },
    },
    {
      name: "_reachp_2",
      args: [{ type: "uint64" }, { type: "(byte,byte[96])" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_approve",
      args: [{ type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_balanceOf",
      args: [{ type: "address" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_getApproved",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_isApprovedForAll",
      args: [{ type: "address" }, { type: "address" }],
      returns: { type: "bool" },
      readonly: true,
    },
    {
      name: "arc72_ownerOf",
      args: [{ type: "uint256" }],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "arc72_setApprovalForAll",
      args: [{ type: "address" }, { type: "bool" }],
      returns: { type: "void" },
    },
    {
      name: "arc72_tokenByIndex",
      args: [{ type: "uint256" }],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_tokenURI",
      args: [{ type: "uint256" }],
      returns: { type: "byte[256]" },
      readonly: true,
    },
    {
      name: "arc72_totalSupply",
      args: [],
      returns: { type: "uint256" },
      readonly: true,
    },
    {
      name: "arc72_transferFrom",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "burn",
      args: [{ type: "uint256" }],
      returns: { type: "void" },
    },
    { name: "close", args: [], returns: { type: "void" } },
    {
      name: "deleteNftDataBox",
      args: [{ type: "uint256" }],
      returns: { type: "void" },
    },
    {
      name: "deleteOperatorDataBox",
      args: [{ type: "address" }, { type: "address" }],
      returns: { type: "void" },
    },
    {
      name: "grant",
      args: [{ type: "address" }],
      returns: { type: "void" },
    },
    {
      name: "manager",
      args: [],
      returns: { type: "address" },
      readonly: true,
    },
    {
      name: "mintTo",
      args: [
        { type: "address" },
        { type: "byte[256]" },
        { type: "uint256" },
        { type: "byte[256]" },
        { type: "uint64" },
      ],
      returns: { type: "uint256" },
    },
    {
      name: "state",
      args: [],
      returns: { type: "(address,uint256,uint256)" },
      readonly: true,
    },
    {
      name: "supportsInterface",
      args: [{ type: "byte[4]" }],
      returns: { type: "byte" },
      readonly: true,
    },
    { name: "touch", args: [], returns: { type: "void" } },
  ],
  events: [
    {
      name: "arc72_Approval",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
    {
      name: "arc72_ApprovalForAll",
      args: [{ type: "address" }, { type: "address" }, { type: "bool" }],
    },
    {
      name: "arc72_Transfer",
      args: [{ type: "address" }, { type: "address" }, { type: "uint256" }],
    },
  ],
};

export const mp200Schema = {
  name: "mp200",
  desc: "mp200",
  methods: [
    // listNet(uint64,uint256,uint64)uint256
    {
      name: "listNet",
      args: [
        {
          name: "collectionId",
          type: "uint64",
        },
        {
          name: "tokenId",
          type: "uint256",
        },
        {
          name: "listPrice",
          type: "uint64",
        },
      ],
      returns: {
        name: "listId",
        type: "uint256",
      },
    },
    // buyNet(uint256)uint256
    {
      name: "buyNet",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        name: "tokenId",
        type: "uint256",
      },
    },
    // deleteNetListing(uint256)void
    // {
    //   name: "deleteNetListing",
    //   args: [
    //     {
    //       name: "listId",
    //       type: "uint256",
    //     },
    //   ],
    // },
    // listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]))
    {
      name: "listingByIndex",
      args: [
        {
          type: "uint256",
        },
      ],
      returns: {
        type: "(uint64,uint256,address,(byte,byte[40]))",
      },
    },
    // state()(address,byte,byte,uint256,address,address)
    {
      name: "state",
      args: [],
      returns: {
        type: "(address,byte,byte,uint256,address,address)",
      },
    },
    // },
    // lock()void
    // {
    //   name: "lock",
    // },
    // touch()void
    // {
    //   name: "touch",
    // },
    // grant(address)void
    // {
    //   name: "grant",
    //   args: [
    //     {
    //       name: "newOwner",
    //       type: "address",
    //     },
    //   ],
    // },
  ],
  // ListEvent: [UInt256, Contract, UInt256, Address, Price], // ListId, CollectionId, CollectionAddress, TokenId, ListPrice
  // BuyEvent: [Contract, UInt256, Address, Price, Address], // CollectionId, TokenId, ListAddr, ListPrice, BuyAddr
  // DeleteNetListingEvent: [UInt256], // ListId
  events: [
    {
      name: "ListEvent",
      args: [
        {
          type: "uint256",
        },
        {
          type: "uint64",
        },
        {
          type: "uint256",
        },
        {
          type: "address",
        },
        {
          type: "(byte,byte[40])",
        },
      ],
    },
    {
      name: "BuyEvent",
      args: [
        {
          type: "uint256",
        },
        {
          type: "uint64",
        },
        {
          type: "uint256",
        },
        {
          type: "address",
        },
        {
          type: "(byte,byte[40])",
        },
        {
          type: "address",
        },
      ],
    },
    {
      name: "DeleteNetListingEvent",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
    },
  ],
};
