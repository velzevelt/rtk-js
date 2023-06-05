<?php


class QuadEquation
{
    public $a = 1;
    public $b = 1;
    public $c = 1;

    public function __construct($a = 1, $b = 1, $c = 1)
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
            if (!(is_finite($arg) && $arg != 0)) {
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
                if (!(is_finite($arg))) {
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

                $t = -$this->c / $this->a;
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
            }
        }

        return $res;
    }
}

$e = new QuadEquation(-1, 7, 8);
var_dump($e->solveEquation());
