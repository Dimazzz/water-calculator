Task: There is a landscape with hills and pits which have similar square shape. 
Each position in this landscape has a specified height. Max number of positions is 32000.
Height is between 0 and 32000.
For example: the first position has height 5, the second position has height 2.
The landscape can be presented as a collection of heights. [5,2,3,4,5,4,0,3,1]

When rain happens, landscape is filled with water. Water is collected inside pits only
between hills. For example: collected 9 squares of water.

![img.png](forReadMe.png)

### You need to:
#### • implement an application which calculates amount of collected water for any landscapes. Water calculator should implement method 
```typescript
window.calculateWaterAmount = (landscape: number[]) => number
```

#### • validate correctness of landscape
#### • jest test
