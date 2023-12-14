class Key {
  private signature: number

  constructor () {
    this.signature = Math.random()
  }
  getSignature () {
    return this.signature
  }
}

class Person {
  private key: Key
  constructor (key: Key) {
    this.key = key
  }

  getKey () {
    return this.key
  }
}

abstract class House {
  door: boolean = false
  key: Key
  tenants: Person[] = []

  comeIn () {
    if (this.door) {
      return this.tenants.push(new Person(this.key))
    }
  }

  public abstract openDoor(key: Key)
}

class MyHouse extends House {
  public openDoor (key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      return (this.door = true)
    } else {
      return (this.door = false)
    }
  }
}

const key = new Key()

const myHouse = new MyHouse()

const person = new Person(key)
myHouse.openDoor(person.getKey())

myHouse.comeIn()

console.log(myHouse.tenants)

export {}
