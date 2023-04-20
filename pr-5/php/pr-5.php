<?php

class Factorial
{
    public $n = 1;

    public function __construct($n)
    {
        $this->n = $n;
    }

    public function calculate()
    {
        $res = false;
        
        try {
            if (is_int($this->n) and $this->n > 0) {

                if ($this->n == 0 or $this->n == 1) {
                    $res = 1;
                } else {
                    $fac = new Factorial($this->n - 1);
                    $res = $this->n * $fac->calculate();
                }
            } else {
                throw new ErrorException("Invalid Factorial");
            }
        }
        catch (ErrorException $e) {
            var_dump($e->getMessage());
        }
        

        return $res;
    }
}

$fac = new Factorial(-7);
var_dump($fac->calculate());