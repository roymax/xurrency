#!/usr/bin/env python
# encoding: utf-8
"""
currencies.py

Created by Roy on 2011-01-20.
Copyright (c) 2011 __MyCompanyName__. All rights reserved.
"""

import sys
import os       

def main():   
	currencies = file('currencies.txt','r')
	i = 0   
	line = 'insert into currencies(id, name,code) values(' 
	while True:
		column = currencies.readline().replace('\r',' ')
		column = column.replace('\n','') 
		i = i + 1
		if i % 2 == 0:
		 	line = line + column + "');"
			print line 
			line = 'insert into currencies(id, name,code) values('
		else:
			line = line + str(i) + ",'" + column +"', '"     
			
		if len(column) == 0:
			break
		    
		
	currencies.close()
	
if __name__ == '__main__':
	main()                    