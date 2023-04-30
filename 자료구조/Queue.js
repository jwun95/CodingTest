// shift 사용
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const value = arr.shift();

// 클래스로 구현

class Queue {
  constructor() {
    this.storage = {}; // 값을 저장할 객체
    this.front = 0; // 첫 원소를 가리킬 포인터
    this.rear = 0; // 마지막 원소를 가리킬 포인터
  }
  size() {
    if (this.storage[rear] === undefined) {
      return 0;
    } else {
      // 이때의 큐에 담겨있는 데이터의 개수는 총 10개가 되는 것을 알 수 있다. 이 10이라는 값은 rear - front + 1을 만족하는 것을 알 수 있다. 1을 더해주는 이유는 front가 0부터 시작한다고 앞서 정의했기 때문이다.
      return this.rear - this.front + 1;
    }
  }
  add(value) {
    // 큐에 데이터가 아무것도 없는 경우
    if (this.size() === 0) {
      // 0번 위치에 값을 넣고 포인터는 건드리지 않는다.
      // 이때 ['0']으로 키를 설정한 이유는
      // 자바스크립트 객체 Object는 키 값으로 오직
      // 문자열과 Symbol만 허용하기 때문
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.size] = value;
    }
  }
  popLeft() {
    let temp; // 첫 원소 값을 임시로 담을 변수
    // 두 포인터의 값이 같은 경우 (데이터가 1개 남은 경우)
    // 물론 초기 상태에서 아무런 데이터가 없는 상황일 수도 있으나
    // 이때 front의 값을 가져오고 제거하는 과정에서
    // 자바스크립트 특성 상 에러가 발생하지 않고
    // 두 포인터의 값을 계속 0으로 유지시켜 주기 때문에
    // 별도로 이 부분에 대한 처리를 해줄 필요는 없지만
    // 좀 더 호환성 높은 코드를 위해서는 사실 하는 편을 추천
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      // 이 부분이 없었다면 이 시점에서 front는
      // rear의 값보다 1보다 더 큰 역설에 빠지게 되므로
      // 데이터가 없는 경우를 다시 0으로 초기화
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}
