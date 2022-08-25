const { User } = require('../models')

exports.findOne = async (id) => {
    try {
        return await User.findOne({
            where: { id }
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.findAll = async () => {
    try {
        return await User.findAll()
    } catch (error) {
        throw new Error(error)
    }
}

exports.create = async (data) => {
    try {
        return await User.create(data);
    } catch (error) {
        throw new Error(error)
    }
}

exports.update = async (id, data) => {
    try {
        return await User.update({ ...data }, {
            where: { id }
        })
    } catch (error) {
        throw new Error(error)
    }
}

exports.delete = async (id) => {
    try {
        return await User.delete({ where: { id } })
    } catch (error) {
        throw new Error(error)
    }
}