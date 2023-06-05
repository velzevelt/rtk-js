<?php
class QuadEquation
{
    public $a, $b, $c;

    public function __construct($a = 0, $b = 0, $c = 0) {
        $this->a = $a;
        $this->b = $b;
        $this->c = $c;
    }

    public function solveEquation() {
        $res = false;
        $args = [$this->a, $this->b, $this->c];

        $full = empty(array_filter($args, fn($x) => $x == 0 ));

        if ($full) {
            $d = $this->b ** 2 - 4 * $this->a * $this->c;
            if ($d <= 0) {
                $res = ($d === 0 && $this->a !== 0) ? [-$this->b / 2 * $this->a] : false;
            } 
            else {
                $d_root = sqrt($d);
                $t = 2 * $this->a;
                $res = [(-$this->b + $d_root) / $t, (-$this->b - $d_root) / $t];
            }
        } else if (empty( array_filter( $args, fn($x) => is_int($x) ) )) {
            $caseA = $this->a == 0 && $this->b != 0 && $this->c != 0;
            $caseC = $this->c == 0 && $this->a != 0 && $this->b != 0;
            $caseBC = $this->b == 0 && $this->c == 0 && $this->a != 0;

            $t = -$this->c / $this->a;
            $caseB = $this->b == 0 && $this->a != 0 && $this->c != 0 && $t > 0;

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

        return $res;
    }
}

$e = new QuadEquation(0, 1, 1);
var_dump($e->solveEquation());