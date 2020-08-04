class Matrix{
Complex a, b, c, d;
  Matrix(Complex _a, Complex _b, Complex _c, Complex _d){
    a = _a;
    b = _b;
    c = _c;
    d = _d;
  }

  Matrix(float a, float b, float c, float d){
    this.a = new Complex(a, 0);
    this.b = new Complex(b, 0);
    this.c = new Complex(c, 0);
    this.d = new Complex(d, 0);
  }

  public Matrix mult(Matrix n){
    return new Matrix(cadd(cmult(a, n.a), cmult(b, n.c)),
                      cadd(cmult(a, n.b), cmult(b, n.d)),
                      cadd(cmult(c, n.a), cmult(d, n.c)),
                      cadd(cmult(c, n.b), cmult(d, n.d)));
  }

  public Matrix mult(float coefficient){
    return new Matrix(a.mult(coefficient),
                      b.mult(coefficient),
                      c.mult(coefficient),
                      d.mult(coefficient));
  }
  public Matrix mult(Complex coefficient){
    return new Matrix(a.mult(coefficient),
                      b.mult(coefficient),
                      c.mult(coefficient),
                      d.mult(coefficient));
  }
  public String toString(){
    return "{"+ a.toString() +","+ b.toString() +"\n"+ c.toString() +","+ d.toString() +"}";
  }

  public Matrix inverse(){
    Complex one = new Complex(1.0, 0.0);
    return new Matrix(d, b.mult(-1.0), c.mult(-1.0), a).mult(one.div(a.mult(d).sub(b.mult(c))));
  }

  public Complex trace(){
    return a.add(d);
  }
  //共役をとる
  public Matrix conjugation(Matrix T){
    return T.mult(this).mult(T.inverse());
  }
}
