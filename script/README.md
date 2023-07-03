# script

Contents of script directory

## scripts

## deploy.js   

### DESCRIPTION

deploy tokens from Json file 

### USAGE  

`node deploy.mjs examples/tokens/token-arc-200.json`

## transfer.js

Distibution script

### USAGE

`node transfer.mjs ID path-to/file`

### DESCRIPTION 

Easy way to distribute token. 

Takes ID of token and input file. The contents of the input file should be of the following formats:

- json
- csv

and end with an extension `.json` or `.csv` depending on the input file content. 

### PARAMETERS

Command 

`script ID FILE`

#### ID

The token id

#### FILE

File containing payload of distribution in `csv` or `json` format.

 
##### JSON

```
[
  {
    "recipientAddress": "QLLLYBITHLFUX3BWLPAXD23SBMLUYHGCG6NOPOBWY7KQHBLHLC3JC7LVBA",
    "amount": 1
  },
  ...
]
```

Source: <u>script/examples/payloads/token-arc-200.json</u>

##### CSV

CSV file will 2 `columns`. The first column is for the destination `address (58 characters)`. The second column is the `amount to send (in AUs)`. That is, if the token is 6 decimals, 1 AU is 1 micro token.

For example, Algo has 6 decimals. 1 AU of Algo is 1 microalgo.

**Example**

```
OJUQOEPFOEZUP3JJIF6OAV4RZQL6HQMBDIXODGSXNEIH7TTR353IMJEL24,997979979909994900
GONA4AO7R6VJZU2TSXXRCRLBCTK2KZROEGUI4XOMAI4XATZKHKSPZNHGHE,19800000000
....
```

Source: <u>script/examples/payloads/arc200-060223.csv</u>




