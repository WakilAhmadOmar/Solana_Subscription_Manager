export type Subscription = {
  "version": "0.1.0",
  "name": "subscription",
  "instructions": [
    {
      "name": "manageSubscription",
      "accounts": [
        {
          "name": "userData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "subscriptionTier",
          "type": "u8"
        }
      ]
    },
    {
      "name": "registerAssetAsNft",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "assetName",
          "type": "string"
        },
        {
          "name": "assetValue",
          "type": "u64"
        }
      ]
    },
    {
      "name": "checkSubscription",
      "accounts": [
        {
          "name": "userData",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "userData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "subscriptionTier",
            "type": "u8"
          },
          {
            "name": "lastPayment",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "nftData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "value",
            "type": "u64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidSubscriptionTier",
      "msg": "Invalid subscription tier."
    },
    {
      "code": 6001,
      "name": "IncorrectFeeAmount",
      "msg": "Incorrect fee amount."
    },
    {
      "code": 6002,
      "name": "SubscriptionExpired",
      "msg": "Subscription has expired."
    }
  ]
};