 countX 
prev  |  next  |  chance
Given a string, compute recursively (no loops) the number of lowercase 'x' chars in the string.

countX("xxhixx") → 4
countX("xhixhix") → 3
countX("hi") → 0


Expected  Run   
countX("xxhixx") → 4  4 OK  
countX("xhixhix") → 3 3 OK  
countX("hi") → 0  0 OK  
countX("h") → 0 0 OK  
countX("x") → 1 1 OK  
countX("") → 0  0 OK  
countX("hihi") → 0  0 OK  
countX("hiAAhi12hi") → 0  0 OK  
other tests
OK  


public int countX(String str) {
  if (str.length() == 0) {
    return 0;
  } else if (str.charAt(0) == 'x') {
    return 1 + countX(str.substring(1)); 
  } else {
    return countX(str.substring(1));
  }
}


public int countX(String str) {
  int count = 0;
  int position = 0; 

  return countX(str, 0, 0);
}

  public int countX(String str, int count, int pos) {
    if(pos >= str.length()) {
      return count;
    } else if (str.charAt(pos) == 'x') {
      return countX(str, count + 1, pos + 1);
    } else {
      return countX(str, count, pos + 1);
    }
  }
