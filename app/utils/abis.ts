export const oracleAbi = [
  {
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
    stateMutability: 'view',
    type: 'function',
  },
]

export const lrtOracleAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AssetNotSupported","type":"error"},{"inputs":[],"name":"CallerNotLRTConfigAdmin","type":"error"},{"inputs":[],"name":"ValueAlreadyInUse","type":"error"},{"inputs":[],"name":"ZeroAddressNotAllowed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":true,"internalType":"address","name":"priceOracle","type":"address"}],"name":"AssetPriceOracleUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lrtConfig","type":"address"}],"name":"UpdatedLRTConfig","type":"event"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"assetPriceOracle","outputs":[{"internalType":"address","name":"priceOracle","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getAssetPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"lrtConfigAddr","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lrtConfig","outputs":[{"internalType":"contract ILRTConfig","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"novETHPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"lrtConfigAddr","type":"address"}],"name":"updateLRTConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateNovETHPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"priceOracle","type":"address"}],"name":"updatePriceOracleFor","outputs":[],"stateMutability":"nonpayable","type":"function"}]

export const novETHABI = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "inputs": [],
  "name": "CallerNotLRTConfigAdmin",
  "type": "error"
}, {
  "inputs": [{
    "internalType": "string",
    "name": "role",
    "type": "string"
  }],
  "name": "CallerNotLRTConfigAllowedRole",
  "type": "error"
}, {
  "inputs": [],
  "name": "CallerNotLRTConfigManager",
  "type": "error"
}, {
  "inputs": [],
  "name": "ValueAlreadyInUse",
  "type": "error"
}, {
  "inputs": [],
  "name": "ZeroAddressNotAllowed",
  "type": "error"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "uint8",
    "name": "version",
    "type": "uint8"
  }],
  "name": "Initialized",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "Paused",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "Unpaused",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "lrtConfig",
    "type": "address"
  }],
  "name": "UpdatedLRTConfig",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "owner",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "account",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "burnFrom",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "internalType": "uint8",
    "name": "",
    "type": "uint8"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "subtractedValue",
    "type": "uint256"
  }],
  "name": "decreaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "spender",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "addedValue",
    "type": "uint256"
  }],
  "name": "increaseAllowance",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "lrtConfigAddr",
    "type": "address"
  }],
  "name": "initialize",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "lrtConfig",
  "outputs": [{
    "internalType": "contract ILRTConfig",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "mint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "name",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "pause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "paused",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "internalType": "string",
    "name": "",
    "type": "string"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "from",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "to",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "unpause",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "lrtConfigAddr",
    "type": "address"
  }],
  "name": "updateLRTConfig",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}]

export const lrtDepositPoolAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidAmountToDeposit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidMaximumNodeDelegatorLimit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaximumDepositLimitReached",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaximumNodeDelegatorLimitReached",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MinimumAmountToReceiveNotMet",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "assetAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "assetBalance",
        "type": "uint256"
      }
    ],
    "name": "NodeDelegatorHasAssetBalance",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NodeDelegatorHasETH",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NodeDelegatorNotFound",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotEnoughAssetToTransfer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novethMintAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "AssetDeposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novethMintAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "ETHDeposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ethAmount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "toAsset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "returnAmount",
        "type": "uint256"
      }
    ],
    "name": "ETHSwappedForLST",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "EthTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxNodeDelegatorLimit",
        "type": "uint256"
      }
    ],
    "name": "MaxNodeDelegatorLimitUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minAmountToDeposit",
        "type": "uint256"
      }
    ],
    "name": "MinAmountToDepositUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "nodeDelegatorContracts",
        "type": "address[]"
      }
    ],
    "name": "NodeDelegatorAddedinQueue",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "nodeDelegatorContracts",
        "type": "address"
      }
    ],
    "name": "NodeDelegatorRemovedFromQueue",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lrtConfig",
        "type": "address"
      }
    ],
    "name": "UpdatedLRTConfig",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "nodeDelegatorContracts",
        "type": "address[]"
      }
    ],
    "name": "addNodeDelegatorContractToQueue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minNovETHAmountExpected",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "depositAsset",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "minNovETHAmountExpected",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "referralId",
        "type": "string"
      }
    ],
    "name": "depositETH",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAssetCurrentLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAssetDistributionData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "assetLyingInDepositPool",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetLyingInNDCs",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetStakedInEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetUnstakingFromEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetLyingInConverter",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetLyingUnstakingVault",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getETHDistributionData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "ethLyingInDepositPool",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethLyingInNDCs",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethStakedInEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethUnstakingFromEigenLayer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethLyingInConverter",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ethLyingInUnstakingVault",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNodeDelegatorQueue",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "getNovETHAmountToMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novethAmountToMint",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "toAsset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "ethAmountToSend",
        "type": "uint256"
      }
    ],
    "name": "getSwapETHToAssetReturnAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "returnAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getTotalAssetDeposits",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalAssetDeposit",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isNodeDelegator",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lrtConfig",
    "outputs": [
      {
        "internalType": "contract ILRTConfig",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "maxApproveToLRTConverter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxNodeDelegatorLimit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minAmountToDeposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "nodeDelegatorQueue",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "nodeDelegatorContracts",
        "type": "address[]"
      }
    ],
    "name": "removeManyNodeDelegatorContractsFromQueue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "nodeDelegatorAddress",
        "type": "address"
      }
    ],
    "name": "removeNodeDelegatorContractFromQueue",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "minAmountToDeposit_",
        "type": "uint256"
      }
    ],
    "name": "setMinAmountToDeposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "toAsset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minToAssetAmount",
        "type": "uint256"
      }
    ],
    "name": "swapETHForAssetWithinDepositPool",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ndcIndex",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferAssetToNodeDelegator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "ndcIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferETHToNodeDelegator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "updateLRTConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "maxNodeDelegatorLimit_",
        "type": "uint256"
      }
    ],
    "name": "updateMaxNodeDelegatorLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const lrtConfigAbi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "AssetAlreadySupported", "type": "error" }, { "inputs": [], "name": "AssetNotSupported", "type": "error" }, { "inputs": [], "name": "CallerNotLRTConfigAdmin", "type": "error" }, { "inputs": [{ "internalType": "string", "name": "role", "type": "string" }], "name": "CallerNotLRTConfigAllowedRole", "type": "error" }, { "inputs": [], "name": "CallerNotLRTConfigManager", "type": "error" }, { "inputs": [], "name": "CallerNotLRTConfigOperator", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "ndc", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "CannotUpdateStrategyAsItHasFundsNDCFunds", "type": "error" }, { "inputs": [], "name": "InvalidMaxRewardAmount", "type": "error" }, { "inputs": [], "name": "ValueAlreadyInUse", "type": "error" }, { "inputs": [], "name": "ZeroAddressNotAllowed", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "asset", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "depositLimit", "type": "uint256" }], "name": "AddedNewSupportedAsset", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "asset", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "depositLimit", "type": "uint256" }], "name": "AssetDepositLimitUpdate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "asset", "type": "address" }, { "indexed": true, "internalType": "address", "name": "strategy", "type": "address" }], "name": "AssetStrategyUpdate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" }], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "asset", "type": "address" }], "name": "RemovedSupportedAsset", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "key", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "contractAddr", "type": "address" }], "name": "SetContract", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "novETH", "type": "address" }], "name": "SetNovETH", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "key", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "tokenAddr", "type": "address" }], "name": "SetToken", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "maxRewardAmount", "type": "uint256" }], "name": "UpdateMaxRewardAmount", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "depositLimit", "type": "uint256" }], "name": "addNewSupportedAsset", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "assetStrategy", "outputs": [{ "internalType": "address", "name": "strategy", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "contractKey", "type": "bytes32" }], "name": "contractMap", "outputs": [{ "internalType": "address", "name": "contractAddress", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "depositLimitByAsset", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "contractKey", "type": "bytes32" }], "name": "getContract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenKey", "type": "bytes32" }], "name": "getLSTToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getSupportedAssetList", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "admin", "type": "address" }, { "internalType": "address", "name": "stETH", "type": "address" }, { "internalType": "address", "name": "ethX", "type": "address" }, { "internalType": "address", "name": "novETH_", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "isSupportedAsset", "outputs": [{ "internalType": "bool", "name": "isSupported", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "novETH", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "contractKey", "type": "bytes32" }, { "internalType": "address", "name": "contractAddress", "type": "address" }], "name": "setContract", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "novETH_", "type": "address" }], "name": "setNovETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenKey", "type": "bytes32" }, { "internalType": "address", "name": "assetAddress", "type": "address" }], "name": "setToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "supportedAssetList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenKey", "type": "bytes32" }], "name": "tokenMap", "outputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "uint256", "name": "depositLimit", "type": "uint256" }], "name": "updateAssetDepositLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "strategy", "type": "address" }], "name": "updateAssetStrategy", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

export const lrtWithdrawalManagerAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AmountMustBeGreaterThanZero",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "AssetNotSupported",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "assetPrice",
        "type": "uint256"
      }
    ],
    "name": "AssetPriceMustBeGreaterMinimum",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigAdmin",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "role",
        "type": "string"
      }
    ],
    "name": "CallerNotLRTConfigAllowedRole",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotLRTConfigOperator",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EthTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ExceedAmountToWithdraw",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidAmountToWithdraw",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoPendingWithdrawals",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "novEthPrice",
        "type": "uint256"
      }
    ],
    "name": "NovETHPriceMustBeGreaterMinimum",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "QueueEmpty",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "QueueFull",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "QueueOutOfBounds",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "StrategyNotSupported",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenTransferFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueAlreadyInUse",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WithdrawalDelayNotPassed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WithdrawalDelayTooSmall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WithdrawalLocked",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novEthAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assetAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novEThPrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assetPrice",
        "type": "uint256"
      }
    ],
    "name": "AssetUnlocked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "withdrawer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountBurned",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountReceived",
        "type": "uint256"
      }
    ],
    "name": "AssetWithdrawalFinalized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "withdrawer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "novETHUnstaked",
        "type": "uint256"
      }
    ],
    "name": "AssetWithdrawalQueued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "ethAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sharesAmount",
        "type": "uint256"
      }
    ],
    "name": "EtherReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "minAmountToWithdraw",
        "type": "uint256"
      }
    ],
    "name": "MinAmountToWithdrawUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lrtConfig",
        "type": "address"
      }
    ],
    "name": "UpdatedLRTConfig",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "withdrawalDelayBlocks",
        "type": "uint256"
      }
    ],
    "name": "WithdrawalDelayBlocksUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "assetsCommitted",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "completeWithdrawal",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "getAvailableAssetAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "availableAssetAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "getExpectedAssetAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "underlyingToReceive",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "requestIndex",
        "type": "uint256"
      }
    ],
    "name": "getRequestId",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "userIndex",
        "type": "uint256"
      }
    ],
    "name": "getUserWithdrawalRequest",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novETHAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expectedAssetAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawalStartBlock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "userNonce",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "novETHUnstaked",
        "type": "uint256"
      }
    ],
    "name": "initiateWithdrawal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lrtConfig",
    "outputs": [
      {
        "internalType": "contract ILRTConfig",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "minAmountToWithdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "nextLockedNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "requestNonce",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      }
    ],
    "name": "nextUnusedNonce",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "nonce",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minAmountToWithdraw_",
        "type": "uint256"
      }
    ],
    "name": "setMinAmountToWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "withdrawalDelayBlocks_",
        "type": "uint256"
      }
    ],
    "name": "setWithdrawalDelayBlocks",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "firstExcludedIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumAssetPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minimumNovEthPrice",
        "type": "uint256"
      }
    ],
    "name": "unlockQueue",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novETHBurned",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "assetAmountUnlocked",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "lrtConfigAddr",
        "type": "address"
      }
    ],
    "name": "updateLRTConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "asset",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "userAssociatedNonces",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "_begin",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_end",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawalDelayBlocks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "requestId",
        "type": "bytes32"
      }
    ],
    "name": "withdrawalRequests",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "novETHUnstaked",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expectedAssetAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawalStartBlock",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]