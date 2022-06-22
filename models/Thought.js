const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionBody: {
            type: Schema.Types.ObjectId,
            required: true,
            default: () => new Types.ObjectId()
        },
        userName: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

const ThoughtSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true
        },
        thoughtBody: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;