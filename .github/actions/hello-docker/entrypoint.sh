#!/bin/sh -l

#echo "::debug:: Debug message"
#echo "::warning:: Warning message"
#echo "::error:: error message"

echo "::add-mask::$1"
echo "Hello $1"
time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some Expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"