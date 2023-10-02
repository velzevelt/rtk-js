<?php

class InvalidArgumentTypeError extends Error {}
class InvalidEquationException extends Error {}


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
        
        // a = 0; b = 0; c = 0
        $case0 = fn() => count(array_filter([$this->a, $this->b, $this->c], fn($v) => (is_numeric($v) && $arg == 0))) == count($args);

        // a != 0; b != 0; c != 0
        $full = fn() => !$case0();

        // Каррирование функции
        $curryArgs = fn($func) => fn() => $func($this->a, $this->b, $this->c);
        
        
        // a = 0; b != 0; c != 0
        $caseA = $curryArgs(fn($a, $b, $c) => $a == 0 && $b != 0 && $c != 0);
        $caseASolution = $curryArgs( fn($a, $b, $c) => [-$c / $b] );

        // c = 0; a != 0; b != 0
        $caseC = $curryArgs(fn($a, $b, $c) => $c == 0 && $a != 0 && $b != 0);
        $caseCSolution = $curryArgs( fn($a, $b, $c) => [0, -$b / $a] ); 

        // b = 0; a != 0; c != 0
        $caseB = $curryArgs(fn($a, $b, $c) => $b == 0 && $a != 0 && $c != 0);
        $caseBSolution = $curryArgs(function($a, $b, $c) {
            $t = $a != 0 ? -$c / $a : 0;
            return -$t > 0 ? [-sqrt($t), sqrt($t)] : false;
        });


        // b = 0; c = 0; a != 0
        $caseBC = $curryArgs(fn($a, $b, $c) => $b == 0 && $c == 0 && $a != 0);
        $caseBCSolution = fn() => [0]; 
        
        $fullEqSolution = $curryArgs(function($a, $b, $c) {
            $d = $b ** 2 - 4 * $a * $c;
            if ($d <= 0) 
            {
                return ($d === 0 && $a !== 0) ? [-$b / 2 * $a] : false;
            } 
            else 
            {
                $d_root = sqrt($d);
                $t = 2 * $a;
                return [(-$b + $d_root) / $t, (-$b - $d_root) / $t];
            }
        });


        $chooseSolution = function($solutionsSet) {
            foreach ($solutionsSet as $solutionGroup) {
                $condition = $solutionGroup[0];
                $solution = $solutionGroup[1];
                if ($condition())
                    return $solution;
            }
        };

        $solution = $chooseSolution(
            [
                [$case0, fn() => false],
                [$full, $fullEqSolution],
                [$caseA, $caseASolution],
                [$caseB, $caseBSolution],
                [$caseBC, $caseBCSolution],
                [$caseC, $caseCSolution],
            ]
        );

        $res = $solution();
        return $res;
    }
}

