const LocationMock = require('../mocks/LocationMock')
const LocationNode = require('./LocationNode')

class LocationTree {
    constructor() {
        this._locations = LocationMock.mockLocations
        this._root = new LocationNode(1, "ROOT", null)
        this._index = 2
        this._indexes = []
        this._indexes[1] = this._root
        this._initialize()
    }

    getLocation(id) {
        return this._indexes[id]
    }

    _initialize() {
        for (let key in this._locations) {
            let child = new LocationNode(this._index, key, this._root)
            this._indexes[child.id] = child
            this._index++
            this._root.setChild(child)
            this._locations[key].forEach(value => {
                let node = this._returnSubTree(child, value)
                if (!node) {
                    return
                }
                child.setChild(node)
            })
        }
    }

    _returnSubTree(root, locations) {
        if (typeof locations == "string") {
            let node = new LocationNode(this._index, locations, root)
            this._indexes[node.id] = node
            this._index++
            return node
        }

        for (let key in locations) {
            let node = new LocationNode(this._index, key, root)
            this._indexes[node.id] = node
            this._index++
            root.setChild(node)
            locations[key].forEach(value => {
                let child = this._returnSubTree(node, value)
                if (!child) {
                    return
                }
                node.setChild(child)
            })
        }
        return null
    }
}

module.exports = new LocationTree()