class Complex {
  private  float re;
  private  float im;

  public Complex(float re, float im) {
    this.re = re;
    this.im = im;
  }

  public float re() {
    return re;
  }
  public float im() {
    return im;
  }

  public Complex add(Complex c) {
    return new Complex(re + c.re, im + c.im());
  }
  public Complex add(float c) {
    return new Complex(re + c, im);
  }
  public Complex sub(Complex c) {
    return new Complex(re - c.re, im - c.im);
  }

  public Complex sub(float c) {
    return new Complex(re - c, im);
  }

  public Complex mult(Complex c) {
    if (c.isInfinity()) {
      if (re == 0 && im == 0) {
        return new Complex(0.0, 0.0);
      }
      if (re == 0) {
        return new Complex(0.0, re*c.im + im*c.re);
      }
      if (im == 0) {
        return new Complex(re*c.re - im*c.im, 0.0);
      }
    } else if (isInfinity()) {
      if (c.re == 0 && c.im == 0) {
        return new Complex(0.0, 0.0);
      }
      if (c.re == 0) {
        return new Complex(0.0, re*c.im + im*c.re);
      }
      if (c.im == 0) {
        return new Complex(re*c.re - im*c.im, 0.0);
      }
    }
    return new Complex(re*c.re - im*c.im, re*c.im + im*c.re);
  }

  public Complex mult(float a) {
    return new Complex(re * a, im * a);
  }

  public Complex div(Complex c) {
    float denominator = c.re*c.re + c.im*c.im;
    if (denominator == 0) {
      return new Complex(Float.POSITIVE_INFINITY, 0);
    } else if (denominator == Float.POSITIVE_INFINITY) {
      return new Complex(0.0, 0.0);
    }

    return new Complex(
      (re*c.re + im*c.im)/denominator, 
      (im*c.re - re*c.im)/denominator);
  }

  public Complex conjunction() {
    return new Complex(re, -im);
  }
  public float abs() {
    return (float)Math.sqrt(re*re + im*im);
  }

  public float arg() {
    return (float)Math.atan(im/re);
  }

  public String toString() {
    if (im >= 0)
      return "(" + re + " + " + im + "i" + ")";
    else
      return "(" + re + " - " + -im + "i" + ")";
  }

  public boolean isInfinity() {
    if (re == Float.POSITIVE_INFINITY || im == Float.POSITIVE_INFINITY ||re == Float.NEGATIVE_INFINITY || im == Float.NEGATIVE_INFINITY)
      return true;
    return false;
  }
  public boolean isZero() {
    if (re == 0 && im == 0)
      return true;
    else
      return false;
  }

  public float lengthSq() {
    return re * re + im * im;
  }

  public float len() {
    return sqrt(re * re + im * im);
  }

  public Complex complexSqrt() {

    if (im > 0) {
      return new Complex((float)(Math.sqrt(re + Math.sqrt(re*re + im*im)) / Math.sqrt(2)), 
        (float)(Math.sqrt(-re + Math.sqrt(re*re + im*im)) / Math.sqrt(2)));
    } else if (im < 0) {
      return new Complex((float)(Math.sqrt(re + Math.sqrt(re*re + im*im)) / Math.sqrt(2)), 
        (float)(-Math.sqrt(-re + Math.sqrt(re*re + im*im)) / Math.sqrt(2)));
    }

    if (re < 0) {
      return new Complex(0.0, (float)Math.sqrt(Math.abs(re)));
    }
    return new Complex((float)Math.sqrt(re), 0.0);
  }
}

static float cdistance(Complex a, Complex b) {
  return a.sub(b).len();
}

Complex cdiv(Complex a, Complex b) {
  return a.div(b);
}

Complex cadd(Complex a, Complex b) {
  return a.add(b);
}

Complex cmult(Complex a, Complex b) {
  return a.mult(b);
}
