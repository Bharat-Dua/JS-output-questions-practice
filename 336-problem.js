let a = 1 || (2 && 3);

console.log(a); // 1 bcoz && operator has more precidency than || operator  and we know in case of && if both value are true than the last value will be returned in case of || if first value is true returned it.
