#!/usr/bin/env python
# encoding: utf-8
"""
flag.py

Created by Roy on 2011-01-15.
Copyright (c) 2011 __MyCompanyName__. All rights reserved.
"""

import sys
import os

import urllib

def main():
	for i in range(1, 122):
		cmd = '/usr/local/bin/wget http://online.sccnn.com/icon/228/'+str(i).zfill(3)+'.png'
		os.system(cmd)

if __name__ == '__main__':
	main()

