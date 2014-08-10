# VPN Security Card for VPN parser and code generator

[![Build Status](https://travis-ci.org/robbieferrero/vpncard.svg?branch=master)](https://travis-ci.org/robbieferrero/vpncard)
[ ![Codeship Status for robbieferrero/vpncard](https://www.codeship.io/projects/a1b96bf0-02e4-0132-fa21-4e32d6340c4e/status)](https://www.codeship.io/projects/30332)

This is ultimately not useful for anyone except a few people. You know who you are.

### Install
*clone the github repository*
```
git clone git@github.com:robbieferrero/vpncard.git
```

*install globally*

from the repository directory:
```
npm install -g .
```

### Usage

```
vpncard <PATH TO PDF> <CODE>
```

The code can be in the format of A1A1A1 or A1 A1 A1. It is case insensitive.

To not have to type the file path each time, put it somewhere you love and add alias:
```
alias vpncard="vpncard <PATH TO PDF>"
```

## Tests
```
npm test
```
