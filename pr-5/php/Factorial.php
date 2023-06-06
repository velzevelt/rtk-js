<?php

class InvalidFactorialError extends Error {};

class Factorial 
{
    private $n = 0;

    public function __construct($n)
    {
        $this->setN($n);
    }

    public function setN($n) {
        if ($this->isValid($n)) {
            $this->n = $n;
        } else {
            throw new InvalidFactorialError();
        }
    }

    public function calculate() 
    {
        $res = false;

        if ($this->n === 0 || $this-> n === 1) {
            $res = 1;
        } else {
            $fac = new Factorial($this->n - 1);
            $fac = $fac->calculate();
            $res = $this->n * $fac;
        }

        return $res;
    } 

    public function isValid($n = null) {
        if ($n === null) {
            $n = $this->n;
        }
        return is_int($n) && $n >= 0;
    }
}