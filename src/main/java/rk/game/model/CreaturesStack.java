package rk.game.model;

import lombok.Data;
import rk.game.model.Creature;

@Data
public class CreaturesStack {
    private Creature creature;

    private int size;
}