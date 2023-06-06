<?php

use function PHPSTORM_META\type;

class InvalidArgumentTypeError extends Error {};


class QuadEquation
{
    public $a = 0;
    public $b = 0;
    public $c = 0;

    public function __construct($a = 0, $b = 0, $c = 0)
    {
        $this->a = $a;
        $this->b = $b;
        $this->c = $c;
    }

    public function solveEquation()
    {
        $res = false;
        $args = [$this->a, $this->b, $this->c];
        $full = true;

        foreach ($args as $arg) {
            if (!(is_numeric($arg) && is_finite($arg) && $arg != 0)) {
                $full = false;
                break;
            }
        }

        if ($full) {
            $d = $this->b ** 2 - 4 * $this->a * $this->c;

            if ($d <= 0) {
                $res = ($d === 0 && $this->a !== 0) ? [-$this->b / 2 * $this->a] : false;
            } else {
                $d_root = sqrt($d);
                $t = 2 * $this->a;
                $res = [(-$this->b + $d_root) / $t, (-$this->b - $d_root) / $t];
            }
        } else {
            $isValidEquation = true;
            foreach ($args as $arg) {
                if (!(is_numeric($arg) && is_finite($arg))) {
                    $isValidEquation = false;
                    break;
                }
            }

            if ($isValidEquation) {
                // Неквадратное уравнение
                $caseA = $this->a === 0 && $this->b !== 0 && $this->c !== 0;

                // см. guide.png
                $caseC = $this->c === 0 && $this->a !== 0 && $this->b !== 0;
                $caseBC = $this->b === 0 && $this->c === 0 && $this->a !== 0;

                $t = $this->a != 0 ? -$this->c / $this->a : 0;
                $caseB = $this->b === 0 && $this->a !== 0 && $this->c !== 0 && $t > 0;
                

                if ($caseB) {
                    $res = [-sqrt($t), sqrt($t)];
                } else if ($caseC) {
                    $res = [0, -$this->b / $this->a];
                } else if ($caseBC) {
                    $res = [0];
                } else if ($caseA) {
                    $res = [-$this->c / $this->b];
                }
            } else {
                $imposters = '';
                foreach($args as $arg) {
                    if (!(is_numeric($arg) && is_finite($arg))) {
                        $imposters .= gettype($arg) . ": $arg";
                    }
                }

                throw new InvalidArgumentTypeError("Аргумент этого типа не поддерживается $imposters");
            }
        }

        return $res;
    }
}
