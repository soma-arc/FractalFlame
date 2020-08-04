void setup() {
  float scale1 = 200; 

  size(1200, 1200);
  background(255);
  translate(width/2, height/2);

  stroke(255, 0, 0);
  noFill();
  rect(-1 * scale1, -1 * scale1, 2 * scale1, 2 * scale1);

  stroke(0, 0, 255);
  strokeWeight(3);
  for (float x = -1; x <= 1; x += 0.05) {
    for (float y = -1; y <= 1; y += 0.05) {
      float r = sqrt(x * x + y * y);
      float r2 = r * r;
      //point(sin(x) * scale1, sin(y) * scale1);
      //point(x/r2 * scale1, y/r2 * scale1);
      point((x*sin(r2) - y * cos(r2)) * scale1, 
        (x*cos(r2) + y * sin(r2)) * scale1);
    }
  }
}

Complex mobiusOnPoint(Matrix t, Complex z){
  if(z.isInfinity()){
    if(!t.c.isZero()){
      return cdiv(t.a, t.c);
    }else{
      return new Complex( Float.POSITIVE_INFINITY, 0.0);
    }
  }else{
    Complex numerix = cadd( cmult(t.a, z), t.b);
    Complex denominator = cadd( cmult(t.c, z), t.d);

    if(denominator.isZero()){
      return new Complex( Float.POSITIVE_INFINITY, 0.0);
    }else{
      return cdiv( numerix, denominator);
    }
  }
}
