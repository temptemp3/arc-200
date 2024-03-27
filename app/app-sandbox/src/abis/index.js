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

// ABI: {
//   impure: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[48])))void`, `buyNet(uint256)uint256`, `deleteNetListing(uint256)void`, `grant(address)void`, `listNet(uint64,uint256,uint64)uint256`, `lock()void`, `touch()void`],
//   pure: [`listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]))`, `state()(address,byte,byte,uint256,address,address)`],
//   sigs: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[48])))void`, `buyNet(uint256)uint256`, `deleteNetListing(uint256)void`, `grant(address)void`, `listNet(uint64,uint256,uint64)uint256`, `listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]))`, `lock()void`, `state()(address,byte,byte,uint256,address,address)`, `touch()void`]
//   }
export const mp201Schema = {
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
    {
      name: "listSC",
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
          type: "uint64",
        },
        {
          type: "uint256",
        },
      ],
      returns: {
        name: "listId",
        type: "uint256",
      },
    },
    {
      name: "listSCA",
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
          type: "uint64",
        },
        {
          type: "uint256",
        },
      ],
      returns: {
        name: "listId",
        type: "uint256",
      },
    },
    // buyNet(uint256)void
    {
      name: "buyNet",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },

    {
      name: "buySC",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        //name: "tokenId",
        type: "void",
      },
    },
    {
      name: "buySCA",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        //name: "tokenId",
        type: "void",
      },
    },
    {
      name: "claimSC",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },
    {
      name: "wnt_stake",
      args: [{ type: "uint64" }],
      returns: { type: "void" },
    },
    {
      name: "wnt_unstake",
      args: [{ type: "uint64" }],
      returns: { type: "void" },
    },
    // // deleteNetListing(uint256)void
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
        type: "(uint64,uint256,address,(byte,byte[40]),address)",
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
    {
      name: "arc200_transfer",
      args: [
        {
          type: "uint64",
        },
        {
          type: "address",
        },
        {
          type: "uint256",
        },
      ],
      returns: { type: "void" },
    },
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
      name: "ClaimEvent",
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
      name: "DeleteListingEvent",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
    },
  ],
};

// impure: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_approve(uint64,address,uint256)void`, `arc200_transfer(uint64,address,uint256)void`, `buyNet(uint256)void`, `buySC(uint256)void`, `claimSC(uint256)void`, `deleteListing(uint256)void`, `deregister()void`, `grant(address)void`, `listNet(uint64,uint256,uint64)uint256`, `listSC(uint64,uint256,uint64,uint256)uint256`, `lock()void`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)void`, `touch()void`, `wnt_stake(uint64)void`, `wnt_unstake(uint64)void`],
// pure: [`keyInfo()(byte,byte[152])`, `listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]),address)`, `manager()address`, `state()(address,byte,uint256,address,address,byte,(byte,byte[152]))`],
// sigs: [`_reachp_0((uint64,(address)))void`, `_reachp_2((uint64,(byte,byte[152])))void`, `arc200_approve(uint64,address,uint256)void`, `arc200_transfer(uint64,address,uint256)void`, `buyNet(uint256)void`, `buySC(uint256)void`, `claimSC(uint256)void`, `deleteListing(uint256)void`, `deregister()void`, `grant(address)void`, `keyInfo()(byte,byte[152])`, `listNet(uint64,uint256,uint64)uint256`, `listSC(uint64,uint256,uint64,uint256)uint256`, `listingByIndex(uint256)(uint64,uint256,address,(byte,byte[40]),address)`, `lock()void`, `manager()address`, `register(byte[32],byte[32],byte[64],uint64,uint64,uint64)void`, `state()(address,byte,uint256,address,address,byte,(byte,byte[152]))`, `touch()void`, `wnt_stake(uint64)void`, `wnt_unstake(uint64)void`]
export const mp202Schema = {
  name: "mp202",
  desc: "mp202",
  methods: [
    { name: "custom", args: [], returns: { type: "void" } },
    // mp204

    // mp204

    // reverseClaimSC(uint256)void

    {
      name: "reverseClaimSC",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },

    // reverseBuySC(uint256)void

    {
      name: "reverseBuySC",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },

    // v_reverseBuySC(uint256)(byte,byte[40])

    {
      name: "v_reverseBuySC",
      args: [
        {
          type: "uint256",
        },
      ],
      returns: {
        type: "(byte,byte[40])",
      },
    },

    // reverseListSC: Fun(
    //   [Contract, UInt256, Contract, UInt256, UInt256, UInt],
    //   UInt256
    //),
    // (CollectionId, TokenId, PaymentTokenId, ListPrice, FloorPrice, EndTime)ListId
    // reverseListSC(uint64,uint256,uint64,uint256,uint256,uint64)uint256

    {
      name: "reverseListSC",
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
          name: "paymentTokenId",
          type: "uint64",
        },
        {
          name: "listPrice",
          type: "uint256",
        },
        {
          name: "floorPrice",
          type: "uint256",
        },
        {
          name: "endTime",
          type: "uint64",
        },
      ],
      returns: {
        name: "listId",
        type: "uint256",
      },
    },

    // mp203
    // const Auction = Struct([
    //   ["collectionId", Contract], // arc72 application id
    //   ["tokenId", UInt256], // arc72 token id
    //   ["endTime", UInt], // end time
    //   ["auctionAddr", Address], // token owner
    //   ["reserveAddr", Address], // token owner
    //   ["highestBid", Price], // highest bid
    //   ["highestBidder", Address], // highest bidder
    // ]);
    // auctionByIndex(uint256)(uint64,uint256,uint64,address,address,(byte,byte[40]),address)
    {
      name: "auctionByIndex",
      args: [
        {
          type: "uint256",
        },
      ],
      returns: {
        type: "(uint64,uint256,uint64,address,address,(byte,byte[40]),address)",
      },
    },
    // mp202
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
    // buyNet(uint256)void
    {
      name: "buyNet",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },
    // listSC(uint64,uint256,uint64,uint256)uint256
    {
      name: "listSC",
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
          name: "scTokenId",
          type: "uint64",
        },
        {
          name: "listPrice",
          type: "uint256",
        },
      ],
      returns: {
        name: "listId",
        type: "uint256",
      },
    },

    // bidSC(uint256,uint256)void

    {
      name: "bidSC",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
        {
          name: "price",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },

    // `buySC(uint256)void
    {
      name: "buySC",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },
    // claimSC(uint256)void
    {
      name: "claimSC",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
      returns: {
        type: "void",
      },
    },
    {
      name: "wnt_stake",
      args: [{ type: "uint64" }],
      returns: { type: "void" },
    },
    {
      name: "wnt_unstake",
      args: [{ type: "uint64" }],
      returns: { type: "void" },
    },
    // // deleteNetListing(uint256)void
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
        type: "(uint64,uint256,address,(byte,byte[40]),address)",
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
    {
      name: "arc200_transfer",
      args: [
        {
          type: "uint64",
        },
        {
          type: "address",
        },
        {
          type: "uint256",
        },
      ],
      returns: { type: "void" },
    },
  ],
  events: [
    // mp204

    // ReverseListEvent: [
    //   UInt256,
    //   Contract,
    //   UInt256,
    //   Address,
    //   Price,
    //   Price,
    //   UInt,
    // ], // ListId, CollectionId, TokenId, ListAddr, ListPrice, FloorPrice, EndTime

    {
      name: "ReverseListEvent",
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
          type: "(byte,byte[40])",
        },
        {
          type: "uint64",
        },
      ],
    },

    // mp203
    // AuctionEvent: [UInt256, Contract, UInt256, Address, Price, UInt], // AuctionId, CollectionId, TokenId, ListAddr, ListPrice, EndTime
    // DeleteAuctionEvent: [UInt256], // AuctionId
    // BidEvent: [UInt256, Address, Price], // AuctionId, BidderAddr, Bid
    // AnnounceEvent: [UInt256], // AuctionId
    {
      name: "AuctionEvent",
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
          type: "uint64",
        },
      ],
    },
    {
      name: "DeleteAuctionEvent",
      args: [
        {
          type: "uint256",
        },
      ],
    },
    {
      name: "BidEvent",
      args: [
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
      name: "AnnounceEvent",
      args: [
        {
          type: "uint256",
        },
      ],
    },
    // mp202
    // ListEvent: [UInt256, Contract, UInt256, Address, Price], // ListId, CollectionId, CollectionAddress, TokenId, ListPrice
    // BuyEvent: [Contract, UInt256, Address, Price, Address], // CollectionId, TokenId, ListAddr, ListPrice, BuyAddr
    // DeleteNetListingEvent: [UInt256], // ListId
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
          name: "listId",
          type: "uint256",
        },
        {
          type: "address",
        },
      ],
    },
    {
      name: "ClaimEvent",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
    },
    {
      name: "DeleteListingEvent",
      args: [
        {
          name: "listId",
          type: "uint256",
        },
      ],
    },
  ],
};

export const arc200Schema = {
  name: "ARC-200",
  desc: "Smart Contract Token Base Interface",
  methods: [
    {
      name: "arc200_name",
      desc: "Returns the name of the token",
      readonly: true,
      args: [],
      returns: { type: "byte[32]", desc: "The name of the token" },
    },
    {
      name: "arc200_symbol",
      desc: "Returns the symbol of the token",
      readonly: true,
      args: [],
      returns: { type: "byte[8]", desc: "The symbol of the token" },
    },
    {
      name: "arc200_decimals",
      desc: "Returns the decimals of the token",
      readonly: true,
      args: [],
      returns: { type: "uint8", desc: "The decimals of the token" },
    },
    {
      name: "arc200_totalSupply",
      desc: "Returns the total supply of the token",
      readonly: true,
      args: [],
      returns: { type: "uint256", desc: "The total supply of the token" },
    },
    {
      name: "arc200_balanceOf",
      desc: "Returns the current balance of the owner of the token",
      readonly: true,
      args: [
        {
          type: "address",
          name: "owner",
          desc: "The address of the owner of the token",
        },
      ],
      returns: {
        type: "uint256",
        desc: "The current balance of the holder of the token",
      },
    },
    {
      name: "arc200_transfer",
      desc: "Transfers tokens",
      readonly: false,
      args: [
        {
          type: "address",
          name: "to",
          desc: "The destination of the transfer",
        },
        {
          type: "uint256",
          name: "value",
          desc: "Amount of tokens to transfer",
        },
      ],
      returns: { type: "bool", desc: "Success" },
    },
    {
      name: "arc200_transferFrom",
      desc: "Transfers tokens from source to destination as approved spender",
      readonly: false,
      args: [
        {
          type: "address",
          name: "from",
          desc: "The source  of the transfer",
        },
        {
          type: "address",
          name: "to",
          desc: "The destination of the transfer",
        },
        {
          type: "uint256",
          name: "value",
          desc: "Amount of tokens to transfer",
        },
      ],
      returns: { type: "bool", desc: "Success" },
    },
    {
      name: "arc200_approve",
      desc: "Approve spender for a token",
      args: [
        { type: "address", name: "spender" },
        { type: "uint256", name: "value" },
      ],
      returns: { type: "bool", desc: "Success" },
    },
    {
      name: "arc200_allowance",
      desc: "Returns the current allowance of the spender of the tokens of the owner",
      readonly: true,
      args: [
        { type: "address", name: "owner" },
        { type: "address", name: "spender" },
      ],
      returns: { type: "uint256", desc: "The remaining allowance" },
    },
    {
      name: "hasBalance",
      desc: "Transfers tokens from source to destination as approved spender",
      readonly: true,
      args: [
        {
          type: "address",
          name: "addr",
          desc: "The source  of the transfer",
        },
      ],
      returns: { type: "byte", desc: "Success" },
    },
    {
      name: "hasAllowance",
      desc: "Transfers tokens from source to destination as approved spender",
      readonly: true,
      args: [
        { type: "address", name: "owner" },
        { type: "address", name: "spender" },
      ],
      returns: { type: "byte", desc: "Success" },
    },
    {
      name: "touch",
      desc: "Transfers tokens from source to destination as approved spender",
      args: [],
      returns: { type: "void" },
    },
    {
      name: "state",
      desc: "",
      readonly: true,
      args: [],
      returns: {
        type: "(byte[32],byte[8],uint64,uint256,address,address,byte,byte)",
        desc: "",
      },
    },
  ],
  events: [
    {
      name: "arc200_Transfer",
      desc: "Transfer of tokens",
      args: [
        {
          type: "address",
          name: "from",
          desc: "The source of transfer of tokens",
        },
        {
          type: "address",
          name: "to",
          desc: "The destination of transfer of tokens",
        },
        {
          type: "uint256",
          name: "value",
          desc: "The amount of tokens transferred",
        },
      ],
    },
    {
      name: "arc200_Approval",
      desc: "Approval of tokens",
      args: [
        {
          type: "address",
          name: "owner",
          desc: "The owner of the tokens",
        },
        {
          type: "address",
          name: "spender",
          desc: "The approved spender of tokens",
        },
        {
          type: "uint256",
          name: "value",
          desc: "The amount of tokens approve",
        },
      ],
    },
  ],
};
