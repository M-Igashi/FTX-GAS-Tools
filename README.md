# FTX tools in Google Apps Script
Google Apps Scripts that keep staking and lending max available funds in FTX.
## Motivation
Compound yield is important to increase your money, but FTX staking and lending should be flexible according to your asset management and strategy. By using GAS triger, you can easily start/stop compound earning in console. The code is pure stand alone GAS, so that you do not need to import any 3rd party libraries or wrappers.
# How to start 
- Go to https://script.google.com/home and create a new project.
- Copy all .gs files in this repository and Paste them to the new project. (delete unnecessary function code before pasting)
- Give your FTX API key and secret in config.gs, and run the function. Once running it, you can delete the key and secret in the script for security. Those works from GAS hidden property.
- During executing GAS function, you may be asked to authorize execution by Google. Simply press authorize.
## KeepLending
In the file, there are two functions. KeepLending is the main function of this file. Make sure KeepLending is selected.
- Input the ticker you would like to keep lending in `var coin = "BTC"`. ie. BTC for Bitcoin, USD for USD.
- Run the function for testing.
- You can copy KeepLending for multiple coin. Rename `function KeepLending(){` to `function KeepLending_USD(){` for example and paste just under the main function.
- Go to Triger in the menu left hand side, and set 1 hour time driven triger for KeepLending functions you wish.
- You can suspend the trigers in any time, so that execution is canceled and you can use accumulated asset within next hour timing.
## KeepStaking
WIP. Due to georestriction of FTX API, I do not have workaround so far.
# Donation
SOL or SPL tonkens are welcome. Please send your pocket pennies to `FS1dcQnnfSnT2qY6FgxxafVCnhXhALeNzEkrwdTJVEXc` .
